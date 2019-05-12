package club.gclmit.project.mooc.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.File;
import java.io.IOException;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.utils
 * @author: 孤城落寞
 * @date: 2019-05-10 17:15
 * @description: 模块描述
 */
@Slf4j
public class HttpClientUtils {

    public String go(String url,String cookie,String referer,String filePath){
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
                FileUtils.write(new File(filePath),result,"UTF-8");
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
}
