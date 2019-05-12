package club.gclmit.project.mooc.other;

import club.gclmit.project.mooc.pojo.Questions;

/**
 * Copyright (C)  2016-2019  孤城落寞的博客
 *
 * @program: club.gclmit.project.mooc.other
 * @author: 孤城落寞
 * @date: 2019-05-10 18:34
 * @description: 模块描述
 */
public class equalsTest {

    public static void main(String[] args) {
        Questions questions1  =   new Questions("蔡英文和赖清德均将2018“九合一”选举的败选归咎于民众。（1.0分）","√");
        Questions questions2  =   new Questions("蔡英文和赖清德均将2018“九合一”选举的败选归咎于民众。（1.0分）","√");
        Questions questions3  =   new Questions("蔡英文和赖清德均将2018“","√");
        Questions questions4  =   new Questions("蔡英文和赖清德均将2018“九合一”选举的败选归咎于民众。（1.0分）","x");

        System.out.println(questions1.equals(questions2));
        System.out.println(questions1.equals(questions3));
        System.out.println(questions1.equals(questions4));

    }
}
