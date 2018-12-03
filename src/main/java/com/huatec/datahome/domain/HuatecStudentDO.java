package com.huatec.datahome.domain;


public class HuatecStudentDO {

  
    /**
     * 1：基本信息、2：上线情况、3：当日点击情况
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
