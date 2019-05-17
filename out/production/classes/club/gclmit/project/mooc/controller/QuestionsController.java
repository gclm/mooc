package club.gclmit.project.mooc.controller;


import club.gclmit.project.mooc.pojo.Questions;
import club.gclmit.project.mooc.service.QuestionsService;
import club.gclmit.project.mooc.task.QuestionTask;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author 孤城落寞
 * @since 2019-05-10
 * @tag 答题模块
 */
@Slf4j
@RestController
public class QuestionsController {

    @Autowired
    private QuestionsService questionsService;

    @Autowired
    private QuestionTask task;

    /**
     * 题库查询接口
     * @details 孤城落寞 2019-05-11 09:57
     * @param content  题库内容
     * @return club.gclmit.project.mooc.pojo.Questions
     */
    @JsonView(Questions.QuestionSimpleView.class)
    @PostMapping("/question")
    public Questions query(String content){
        log.info("前台传递参数:{}",content);
        QueryWrapper<Questions> queryWrapper = new QueryWrapper<>();
        queryWrapper.like("title",content.trim());
        Questions questions = questionsService.getOne(queryWrapper);
        log.info("当前问题:{}",questions);
        if(questions == null){
            return new Questions();
        } else {
            return questions;
        }
    }

    /**
     * 自动添加题库
     * @details 孤城落寞 2019-05-17 13:20
     * @param url url 链接
     * @param cookie cookie
     * @param referer  响应链接
     * @return java.lang.String
     */
    @PostMapping("/question/fastAdd")
    public String fastAdd(String url,String cookie,String referer){

        log.info("前台传递参数：\nurl:{} \ncookie:{} \nreferer:{}",url,cookie,referer);
        String content = task.crawlTask(url, cookie, referer);
            if(content != null){
            List<Questions> list = task.parse(content);

            List<Questions> questionsList = questionsService.list();

            list.forEach(questions -> {
                boolean status = questionsList.contains(questions);
                log.info("判断:{},当前题目：{}",status,questions);
                if(status == false){
                    log.info("添加题目：{}",questions);
                    boolean save = questionsService.save(questions);
                    if (save){
                        log.info("插入数据成功");
                    }
                }
            });
        }else {
            log.info("获取当前页面失败");
            return "题目添加失败，请联系管理员qq:1719982754";
        }
        log.info("插入数据结束！！！！");
        return "题目添加成功!!!!";
    }

    /**
     * 手动添加题库
     * @details 孤城落寞 2019-05-17 13:17
     * @param questions
     * @return java.lang.String
     */
    @PostMapping("/question/fromAdd")
    public String fromAdd(@RequestBody Questions questions){

        log.info("\n前台传递参数：questions:{} ",questions);
        List<Questions> questionsList = questionsService.list();
        boolean status = questionsList.contains(questions);
        log.info("判断:{},当前题目：{}",status,questions);
        if(status == false){
            log.info("添加题目：{}",questions);
            boolean save = questionsService.save(questions);
            if (save){
                log.info("插入数据成功");
                return "题目添加成功!!!!";
            }
        } else {
            return "题目添加失败，题库存在该数据";
        }
        return "题目添加失败，请联系管理员qq:1719982754";
    }


    @GetMapping("/question/add")
    public ModelAndView add(){
        return new ModelAndView("add");
    }

    /**
     * 重定向首页
     * @details 孤城落寞 2019-05-11 09:58
     * @param
     * @return org.springframework.web.servlet.ModelAndView
     */
    @GetMapping("/")
    public ModelAndView index(){

        return new ModelAndView("index");
    }

    /**
     * 服务测试
     * @details 孤城落寞 2019-05-11 09:58
     * @param
     * @return java.lang.String
     */
    @GetMapping("/hello")
    public String hello(){

        return "hello";
    }
}

