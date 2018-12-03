package com.huatec.datahome.domain;


public class HuatecTeacherDO {

  
    /**
     * 1：基本信息、2：资源信息、3当日信息
     */
  private Integer titlePageNum;
  
    /**
     * null
     */
  private String name;
  
    /**
     * null
     */
  private Integer value;


  public Integer getTitlePageNum() {
    return titlePageNum;
  }

  public void setTitlePageNum(Integer titlePageNum) {
    this.titlePageNum = titlePageNum;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public Integer getValue() {
    return value;
  }

  public void setValue(Integer value) {
    this.value = value;
  }

}
