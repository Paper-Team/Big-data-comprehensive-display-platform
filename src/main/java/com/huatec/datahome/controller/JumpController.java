package com.huatec.datahome.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

import com.huatec.datahome.config.StatisticConfig;

/**
 * 页面跳转使用
 *
 * @author HF
 * @date 2018-05-02
 *
 */
@Controller
public class JumpController {
	private final StatisticConfig statisticConfig;
	
	@Autowired
	JumpController(StatisticConfig statisticConfig){
		this.statisticConfig = statisticConfig;
	}

    /**
     * 跳转到路径
     *
     * @return 页面跳转路径
     */
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping("professionalOperating1")
    public String professionalOperating1(){
        return "professionalOperating1";
    }
    
    @RequestMapping("professionalanalysis2")
    public String professionalAnalysis2(){
        return "professionalanalysis2";
    }
    
    @RequestMapping("wisdomStudy3")
    public String wisdomStudy3(Model model){
    	model.addAttribute("ipAndPort", statisticConfig.getStatisticIpAndPort());
        return "wisdomStudy3";
    }
    
    @RequestMapping("wisdomStudy4")
    public String wisdomStudy4(){
        return "wisdomStudy4";
    }
    
    @RequestMapping("jobAnalysis5")
    public String jobAnalysis5(){
        return "jobAnalysis5";
    }
    
}
