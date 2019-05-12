package club.gclmit.project.mooc.task;

import club.gclmit.project.mooc.pojo.Questions;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.task
 * @author: 孤城落寞
 * @date: 2019-05-10 17:14
 * @description: 模块描述
 */
@Slf4j
@Component
public class QuestionTask {

    public String crawlTask(String url,String cookie,String referer){
        //创建 HttpClinet 实例
        CloseableHttpClient httpClient = HttpClients.createDefault();

//      创建 HttpGet 实例
        HttpGet httpGet = new HttpGet(url);

        httpGet.setHeader("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
        httpGet.setHeader("Connection","keep-alive");
        httpGet.setHeader("Pragma","no-cache");
        httpGet.setHeader("Cache-Control","no-cache");
        httpGet.setHeader("Upgrade-Insecure-Requests","1");
        httpGet.setHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
        httpGet.setHeader("Referer",referer);
        httpGet.setHeader("Cookie",cookie);

///      执行get 请求
        CloseableHttpResponse response = null;
        try {
            response = httpClient.execute(httpGet);

            log.info("当前状态：{}",response.getStatusLine().getStatusCode());
            if(response.getStatusLine().getStatusCode() == 200) {
                HttpEntity entity = response.getEntity();
                String result = EntityUtils.toString(entity, "UTF-8");
//                FileUtils.write(new File(filePath),result,"UTF-8");
                return result;
            }
        } catch (IOException e) {
            log.info("获取当前页面失败");
            e.printStackTrace();
        } finally {
            try {
                response.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public List<Questions> parse(String content) {

        Document document = Jsoup.parse(content);

        Elements elements = document.select(".CyBottom .TiMu");

        log.info("当前数据量："+elements.size());

        List<Questions> list = new ArrayList<Questions>();

        List<Questions> radioList = new ArrayList<Questions>();

        Questions questions = null;

        for(int i = 0 ; i < 55 ; i++){
            Element element = elements.get(i);
            String title = element.getElementsByClass("fl clearfix").text();
            Elements hrefElements = element.select(".Cy_ulTop a[href]");
            String answer_option_string = element.getElementsByClass("Py_answer clearfix").text().trim().replace("我的答案：","");

            questions = new Questions(title,
                    hrefElements.get(0).text(),
                    hrefElements.get(1).text(),
                    hrefElements.get(2).text(),
                    hrefElements.get(3).text(),
                    answer_option_string,
                    "null");
//            System.out.println("答案选项:"+answer_option_string);
            radioList.add(questions);
//            System.out.println("答案:"+hrefElements.get(answer_option).text());
        }

//        System.out.println("选择题（单双选）：");
        radioList.forEach(question -> {
            String answer = question.getAnswer();
            String[] split = answer.split("");
            StringBuilder answerString = new StringBuilder();
            for(String s : split){
                switch (s){
                    case "A":
                        answerString.append(question.getOptionA()).append(";");
                        break;
                    case "B":
                        answerString.append(question.getOptionB()).append(";");
                        break;
                    case "C":
                        answerString.append(question.getOptionC()).append(";");
                        break;
                    case "D":
                        answerString.append(question.getOptionD()).append(";");
                        break;
                }
            }
            answerString.trimToSize();
            question.setAnswerString(answerString.subSequence(0,answerString.length()-1).toString());
            list.add(question);
//            System.out.println(question);
        });
//        System.out.println("判断题：");
        for(int i = 55; i < elements.size() ; i++){
            Element element = elements.get(i);
            String title = element.getElementsByClass("fl clearfix").text();
            String answerString = element.getElementsByClass("Py_answer clearfix").text().trim().replace("我的答案：","");
//            log.info("结果：{}",answerString);
            list.add(new Questions(title,answerString));
//            System.out.println(new Questions(title,answerString));
        }
        return list;
    }

}
