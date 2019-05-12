package club.gclmit.project.mooc;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.sql.DataSource;
import java.sql.SQLException;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class MoocApplicationTests {

    @Autowired
    private DataSource dataSource;

    /**
     * 查看数据源情况
     * @throws SQLException
     */
    @Test
    public void getDataSource() throws SQLException {
        log.info("\n数据源类型：{}\t数据源链接状态：{}",dataSource.getClass(),dataSource.getConnection());
    }

    /**
     * mybatis-plus 代码生成配置
     *
     *  配置详情：http://mp.baomidou.com/#/generate-code
     */
    @Test
    public void autoGenerator(){
//      1. 全局配置
        GlobalConfig config=new GlobalConfig();
//       是否开启AR 模式
        String projectPath = System.getProperty("user.dir");
        config.setActiveRecord(false)
//            生成路径  这里我采用的是绝对路径  其他人可以采用相对路径试试
                .setOutputDir(projectPath+"/src/main/java")
//            文件覆盖
                .setFileOverride(true)
//				是否打开生成的文件
                .setOpen(false)
//              主键生成策略
                .setIdType(IdType.AUTO)
//				开启 Swagger2
                .setSwagger2(false)
//               作者
                .setAuthor("孤城落寞")
//             设置生成的接口的名字 首字母是否为I 一下类似
                .setServiceName("%sService");

//      2. 数据源配置
        DataSourceConfig dsConfig = new DataSourceConfig();
//      设置数据库类型
        dsConfig.setDbType(DbType.MYSQL)
                .setDriverName("com.mysql.cj.jdbc.Driver")
                .setUrl("jdbc:mysql:///mooc?useUnicode=true&characterEncoding=utf-8&useSSL=true")
                .setUsername("root")
                .setPassword("gclmroot1452");


//      3. 策略配置
        StrategyConfig stConfig = new StrategyConfig();
//       全局大写命名
        stConfig.setCapitalMode(true)
//               数据库表映射到实体的命名策略
                .setNaming(NamingStrategy.underline_to_camel)
//               表名前缀
                .setTablePrefix("mooc_")
                .setEntityLombokModel(true)
//               用于生成的表 传入的值是同一个集合
                .setInclude("mooc_questions");

//      4. 包名策略配置
        PackageConfig pkConfig = new PackageConfig();
//      设置全局包名
//        pkConfig.setParent("club.gclmit.project.resthome.generate")
        pkConfig.setParent("club.gclmit.project.mooc")
                .setMapper("mapper")
                .setService("service")
                .setEntity("pojo");

//      5. 整合配置
        AutoGenerator ag = new AutoGenerator();
        ag.setGlobalConfig(config)
                .setDataSource(dsConfig)
                .setPackageInfo(pkConfig)
                .setStrategy(stConfig);
//      6. 执行
        ag.execute();
    }

}
