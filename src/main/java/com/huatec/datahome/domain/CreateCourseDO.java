package com.huatec.datahome.domain;


public class CreateCourseDO {

  
    /**
     * null
     */
  private String createDate;
  
    /**
     * null
     */
  private Integer createNum;
  
    /**
     * (0精品, 1项目部)
     */
  private Integer type;


  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }


  public Integer getCreateNum() {
    return createNum;
  }

  public void setCreateNum(Integer createNum) {
    this.createNum = createNum;
  }


  public Integer getType() {
    return type;
  }

  public void setType(Integer type) {
    this.type = type;
  }

}
