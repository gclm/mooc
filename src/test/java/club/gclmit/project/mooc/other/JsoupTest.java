package club.gclmit.project.mooc.other;

import club.gclmit.project.mooc.pojo.Questions;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.other
 * @author: 孤城落寞
 * @date: 2019-05-10 15:42
 * @description: 模块描述
 */
@Slf4j
public class JsoupTest {


    public static void radioQuestion() throws IOException {
        //      解析网页，返回文档对象
        Document document = Jsoup.parse(new File("/Volumes/Download/mooc.html"),"UTF-8");

        Elements elements = document.select(".CyBottom .TiMu");

        Element element = elements.get(0);

        System.out.println("题目："+ element.getElementsByClass("fl clearfix").text());

        Elements hrefElements = element.select(".Cy_ulTop a[href]");

        String answer_option_string = element.getElementsByClass("Py_answer clearfix").text().trim().replace("我的答案：","");


        int answer_option = 0;

        switch (answer_option_string){
            case "A":
                answer_option = 0;
                break;
            case "B":
                answer_option = 1;
                break;
            case "C":
                answer_option = 2;
                break;
            case "D":
                answer_option = 3;
                break;
        }

        hrefElements.forEach(href->{
            System.out.println("选项:"+ href.text());
        });

        System.out.println("答案选项:"+answer_option_string);
        System.out.println("答案:"+hrefElements.get(answer_option).text());
    }

    public static void main(String[] args) throws IOException {
//        radioQuestion();



    }
}
