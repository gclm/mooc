package club.gclmit.project.mooc.config;

import com.alibaba.druid.filter.Filter;
import com.alibaba.druid.filter.stat.StatFilter;
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.LinkedList;


/**
 * Copyright (C), 2016-2019, 孤城落寞的博客
 *
 * @program: club.gclmit.sabre.cli.config
 * @author: gclm
 * @date: 2019/4/20 9:23 PM
 * @description: druid 数据源配置
 */
@Configuration
public class DruidConfig {

    // ConfigurationProperties可以直接把应用配置的spring.datasource.druid属性开头的值注入到DruidDataSource中
    @ConfigurationProperties(prefix = "spring.datasource.druid")
//    @Bean(initMethod = "init",destroyMethod = "close")
    @Bean
    public DruidDataSource druidDataSource(){
        DruidDataSource druidDataSource = new DruidDataSource();

        // 添加druid的监控过滤器，当前只演示监控的功能，因此只有一个过滤器，可以实现多个过滤器
//        LinkedList<Filter> filtersList = new LinkedList();
//        filtersList.add(filter());
//        druidDataSource.setProxyFilters(filtersList);

        return druidDataSource;
    }

    @Bean
    public Filter filter(){
        StatFilter statFilter = new StatFilter();
        // SQL执行时间超过2s种的被判定为慢日志
        statFilter.setSlowSqlMillis(2000);
        //显示慢日志
        statFilter.setLogSlowSql(true);
        //合并SQL，有时，一些相同的慢日志过多影响阅读，开启合并功能
        statFilter.setMergeSql(true);
        return statFilter;
    }

    // 监控的面板
    @Bean
    public ServletRegistrationBean servletRegistrationBean(){
        // 注册自己的Sevlet
        return new ServletRegistrationBean(new StatViewServlet(),"/druid/*");
    }

}
