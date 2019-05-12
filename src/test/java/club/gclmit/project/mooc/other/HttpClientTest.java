package club.gclmit.project.mooc.other;

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

import java.io.File;
import java.io.IOException;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.other
 * @author: 孤城落寞
 * @date: 2019-05-10 15:26
 * @description: JsopTest
 */
public class HttpClientTest {

    public static void main(String[] args) throws IOException {

//      创建 HttpClinet 实例
        CloseableHttpClient httpClient = HttpClients.createDefault();

//      创建 HttpGet 实例
        HttpGet httpGet = new HttpGet("https://mooc1-2.chaoxing.com/exam/test/reVersionPaperMarkContentNew?courseId=203623157&classId=7206558&p=1&id=8398861&ut=s&examsystem=0&cpi=41939009");

        httpGet.setHeader("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
        httpGet.setHeader("Connection","keep-alive");
        httpGet.setHeader("Pragma","no-cache");
        httpGet.setHeader("Cache-Control","no-cache");
        httpGet.setHeader("Upgrade-Insecure-Requests","1");
        httpGet.setHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
        httpGet.setHeader("Referer","https://mooc1-2.chaoxing.com/exam/test?classId=7206558&courseId=203623157&ut=s&enc=ffd8ba86b7dae03e5cb7275a2649b9d4&cpi=41939009&openc=");
        httpGet.setHeader("Cookie","k8s=64f62c4562ecf14cff2ab32f0f290164d27528be; __dxca=ca9c9667-580e-4788-97d0-4920a9bbc38b; jrose=A501BA4A9D8E484E9837F5BAA3369BEE.mooc-3685182215-ljx3b; route=69a208f7ef97c8349a42f0121eef1c12; fanyamoocs=11401F839C536D9E; isfyportal=1; uname=20161564304; fid=2695; _uid=56507814; uf=da0883eb5260151e44983da5499f75e6921a7479a4781a6aa132be695bd54231ac6a0f9df0f31e7b7179d6c6667be2c7c49d67c0c30ca5047c5a963e85f11099777db39f70562898fd68be96b6183b1aac46c5b57f0d2f86e6c4b7094a303451305904e0aa3fc17b; _d=1557473342263; UID=56507814; vc=0CA6EF1200072117B3597372135E48C4; vc2=F88CCF0D887D9A7FFAD45746B5229A81; DSSTASH_LOG=C_38-UN_1493-US_56507814-T_1557473342263; thirdRegist=0; rt=-2; tl=0");

//      执行get 请求
        CloseableHttpResponse response = httpClient.execute(httpGet);

//      获取返回实体
        HttpEntity entity = response.getEntity();

//      获取返回内容
        String result = EntityUtils.toString(entity, "UTF-8");
//      System.out.println("网页内容： "+result);
//      关闭流释放资源
        response.close();

        String htmlPath = "/Volumes/Download/mooc.html";
        FileUtils.write(new File(htmlPath), result);

        System.out.println("文件写入完成!!!!!");





    }
}
