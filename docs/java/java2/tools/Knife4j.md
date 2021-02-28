# Swagger增强工具 Knife4j

与SpringBoot进行整合，首先引入maven依赖：

```
        <!--knife4j 对swagger增强，页面更加美观-->
		<dependency>
			<groupId>com.github.xiaoymin</groupId>
			<artifactId>knife4j-spring-boot-starter</artifactId>
			<!--在引用时请在maven中央仓库搜索2.X最新版本号-->
			<version>${knife4j.version}</version>
		</dependency>
```

然后添加配置信息Knife4jConfiguration：

```java
package com.dong.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Knife4jConfiguration {

    @Bean(value = "defaultApi2")
    public Docket defaultApi2() {
        Docket docket=new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        .title("Knife4j API文档")
                        .description("Swagger增强工具")
                        .termsOfServiceUrl("https://dongjianone.github.io/")
                        .contact("931070423@qq.com")
                        .version("1.0")
                        .build())
                //分组名称
                .groupName("2.X版本")
                .select()
                //这里指定Controller扫描包路径
                .apis(RequestHandlerSelectors.basePackage("com.dong.system.controller"))
                .paths(PathSelectors.any())
                .build();
        return docket;
    }
}

```

Swagger使用时的其他内容保持不便！
