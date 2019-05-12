package club.gclmit.project.mooc.service;

import club.gclmit.project.mooc.pojo.Questions;
import club.gclmit.project.mooc.task.QuestionTask;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.service
 * @author: 孤城落寞
 * @date: 2019-05-10 17:04
 * @description: 模块描述
 */
@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class QuestionServiceTest {

    @Autowired
    private QuestionsService questionsService;

//    @Autowired
//    private QuestionTask task;

//    @Test
//    public void add1(){
//        String url = "https://mooc1-2.chaoxing.com/exam/test/reVersionPaperMarkContentNew?courseId=203623157&classId=7206558&p=1&id=8398861&ut=s&examsystem=0&cpi=41939009";
//        String cookie = "k8s=64f62c4562ecf14cff2ab32f0f290164d27528be; __dxca=ca9c9667-580e-4788-97d0-4920a9bbc38b; route=69a208f7ef97c8349a42f0121eef1c12; fanyamoocs=11401F839C536D9E; isfyportal=1; uname=20161564304; fid=2695; _uid=56507814; uf=da0883eb5260151e44983da5499f75e6921a7479a4781a6aa132be695bd54231ac6a0f9df0f31e7b7179d6c6667be2c7c49d67c0c30ca5047c5a963e85f11099777db39f70562898fd68be96b6183b1aac46c5b57f0d2f86e6c4b7094a303451305904e0aa3fc17b; _d=1557473342263; UID=56507814; vc=0CA6EF1200072117B3597372135E48C4; vc2=F88CCF0D887D9A7FFAD45746B5229A81; DSSTASH_LOG=C_38-UN_1493-US_56507814-T_1557473342263; thirdRegist=0; rt=-2; tl=0; jrose=74F49C6DAC475636167BA450B0CD4CFC.mooc-3685182215-ljx3b";
//        String referer = "https://mooc1-2.chaoxing.com/exam/test?classId=7206558&courseId=203623157&ut=s&enc=ffd8ba86b7dae03e5cb7275a2649b9d4&cpi=41939009&openc=";
//
//        String content = task.crawlTask(url, cookie, referer);
//        if(content != null){
//            List<Questions> list = task.parse(content);
//
//            List<Questions> questionsList = questionsService.list();
//
//            list.forEach(questions -> {
//              boolean status = questionsList.contains(questions);
//              if(status == false){
//                  boolean save = questionsService.save(questions);
//                  if (save){
//                      log.info("插入数据成功");
//                  }
//              }
//            });
//        }
//        log.info("获取当前页面失败");
//    }
//
//
//    @Test
//    public void add2(){
//        String url ="https://mooc1-2.chaoxing.com/exam/test/reVersionPaperMarkContentNew?courseId=203623157&classId=7206558&p=1&id=8378822&ut=s&examsystem=0&cpi=41939021";
//        String cookie ="k8s=64f62c4562ecf14cff2ab32f0f290164d27528be; __dxca=ca9c9667-580e-4788-97d0-4920a9bbc38b; route=69a208f7ef97c8349a42f0121eef1c12; jrose=74F49C6DAC475636167BA450B0CD4CFC.mooc-3685182215-ljx3b; fanyamoocs=11401F839C536D9E; isfyportal=1; source=\"\"; uname=20161564326; fid=2695; _uid=56507826; uf=da0883eb5260151e44983da5499f75e6921a7479a4781a6ab5b2e040c1babe2e6b8725bc3ff0b05194669f6773b054c4c49d67c0c30ca5047c5a963e85f11099777db39f70562898fd68be96b6183b1aac46c5b57f0d2f86ea307a9c78de9d0e0cfc2806c7a61085; _d=1557483774441; UID=56507826; vc=D98F531EE3F73097685CC9A51A37D6BD; vc2=95CC77CD8751EA8D6DF33AB2711D8B41; DSSTASH_LOG=C_38-UN_1493-US_56507826-T_1557483774441; thirdRegist=0; rt=-2; tl=0";
//        String referer ="https://mooc1-2.chaoxing.com/exam/test?classId=7206558&courseId=203623157&ut=s&enc=2b575d50a273032646c42dacfe5ccadf&cpi=41939021&openc=f2ebf98f99869a6f70633475e7e0e8c0";
//
//        String content = task.crawlTask(url, cookie, referer, "/Volumes/other/文件交换/mooc/8378822.html");
//        if(content != null){
//            List<Questions> list = task.parse(content);
//
//            List<Questions> questionsList = questionsService.list();
//
//            list.forEach(questions -> {
//                boolean status = questionsList.contains(questions);
//                log.info("判断:{},当前题目：{}",status,questions);
//                if(status == false){
//                    log.info("添加题目：{}",questions);
//                    boolean save = questionsService.save(questions);
//                    if (save){
//                        log.info("插入数据成功");
//                    }
//                }
//            });
//        }else {
//            log.info("获取当前页面失败");
//        }
//        log.info("插入数据结束！！！！");
//    }
//
//    @Test
//    public void add3(){
//        String url ="https://mooc1-2.chaoxing.com/exam/test/reVersionPaperMarkContentNew?courseId=203623157&classId=7206558&p=1&id=8377652&ut=s&examsystem=0&cpi=41939019";
//        String cookie ="fanyamoocs=11401F839C536D9E; isfyportal=1; uname=20161564324; fid=2695; _uid=56507824; uf=da0883eb5260151e44983da5499f75e6921a7479a4781a6a4c92f35d0e7ff9d86b8725bc3ff0b05116b42a3c0b01cb78c49d67c0c30ca5047c5a963e85f11099777db39f70562898fd68be96b6183b1aac46c5b57f0d2f865084629c9c8e1359b47a582611f9d866; _d=1557484917240; UID=56507824; vc=7780CCD68DD6C01BBF8B4AC3D847B919; vc2=275B4321A706DA3AF077588753A401FA; DSSTASH_LOG=C_38-UN_1493-US_56507824-T_1557484917240; thirdRegist=0; rt=-2; tl=0; k8s=c4a66fc980575881f4172ac285e3118d7f39793e; __dxca=9d26fbc4-404f-4e21-9020-0b12d14100fe; jrose=55EBE98274758EA4BB79C015EDA8E18F.mooc-3685182215-z41cq; route=f4530fc65c8934baba769156ca67ec88";
//        String referer ="https://mooc1-2.chaoxing.com/exam/test?classId=7206558&courseId=203623157&ut=s&enc=3414d2d6853981b03e9bdc72ab887d92&cpi=41939019&openc=4920179f993d3b8fc1e5478b9fdd3404";
//
//
//        String content = task.crawlTask(url, cookie, referer, "/Volumes/other/文件交换/mooc/8398861.html");
//        if(content != null){
//            List<Questions> list = task.parse(content);
//
//            List<Questions> questionsList = questionsService.list();
//
//            list.forEach(questions -> {
//                boolean status = questionsList.contains(questions);
//                log.info("判断:{},当前题目：{}",status,questions);
//                if(status == false){
//                    log.info("添加题目：{}",questions);
//                    boolean save = questionsService.save(questions);
//                    if (save){
//                        log.info("插入数据成功");
//                    }
//                }
//            });
//        }else {
//            log.info("获取当前页面失败");
//        }
//        log.info("插入数据结束！！！！");
//    }
//
//    @Test
//    public void add4(){
//        String url ="https://mooc1-2.chaoxing.com/exam/test/reVersionPaperMarkContentNew?courseId=203623157&classId=7206558&p=1&id=8014655&ut=s&examsystem=0&cpi=41939014";
//        String cookie ="fanyamoocs=11401F839C536D9E; isfyportal=1; uname=20161564314; fid=2695; _uid=56507819; uf=da0883eb5260151e44983da5499f75e6921a7479a4781a6aa3ae323b4acadcc324677a7a8bd7461bd603c6ded0e866e8c49d67c0c30ca5047c5a963e85f11099777db39f70562898fd68be96b6183b1aac46c5b57f0d2f866ac73fb6465392db1d7d4049de3646c0; _d=1557539311911; UID=56507819; vc=D3F804C12ABE78AF23161EF79450AD7D; vc2=3765D433713580406D0249FED33E128E; DSSTASH_LOG=C_38-UN_1493-US_56507819-T_1557539311911; thirdRegist=0; rt=-2; tl=0; k8s=6c0e4dee7daae38d112275e36dd5a393b78702fc; __dxca=a3dad62f-b9d0-4163-98a8-f55784dec99c; jrose=BA215F52B74800152EFDE95773A35ECA.mooc-2747558670-6vw6s; route=69a208f7ef97c8349a42f0121eef1c12";
//        String referer ="https://mooc1-2.chaoxing.com/exam/test?classId=7206558&courseId=203623157&ut=s&enc=49bbb9b9418edcf969c7d4701304e3be&cpi=41939014&openc=04efdec5ed386b976030099299934cd6";
//        String content = task.crawlTask(url, cookie, referer, "/Volumes/other/文件交换/mooc/8014655.html");
//        if(content != null){
//            List<Questions> list = task.parse(content);
//
//            List<Questions> questionsList = questionsService.list();
//
//            list.forEach(questions -> {
//                boolean status = questionsList.contains(questions);
//                log.info("判断:{},当前题目：{}",status,questions);
//                if(status == false){
//                    log.info("添加题目：{}",questions);
//                    boolean save = questionsService.save(questions);
//                    if (save){
//                        log.info("插入数据成功");
//                    }
//                }
//            });
//        } else {
//            log.info("获取当前页面失败");
//        }
//        log.info("插入数据结束！！！！");
//    }
}
