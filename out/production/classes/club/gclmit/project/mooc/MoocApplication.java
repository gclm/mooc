package club.gclmit.project.mooc;

import io.httpdoc.spring.boot.EnableHttpdoc;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("club.gclmit.project.mooc.mapper")
@EnableHttpdoc(
        packages = {"club.gclmit.project.doc"},
        httpdoc = "mooc 题库",
        version = "v0.01",
        description = "孤城落寞树形笔记 Restful API"
)
@SpringBootApplication
public class MoocApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoocApplication.class, args);
    }

}
