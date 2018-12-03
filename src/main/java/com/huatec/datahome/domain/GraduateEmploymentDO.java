package com.huatec.datahome.domain;


public class GraduateEmploymentDO {

  
    /**
     * 专业
     */
  private String majorName;
  
    /**
     * 省份
     */
  private String province;
  
    /**
     * 毕业生数量
     */
  private Integer graduateNum;


  public String getMajorName() {
    return majorName;
  }

  public void setMajorName(String majorName) {
    this.majorName = majorName;
  }


  public String getProvince() {
    return province;
  }

  public void setProvince(String province) {
    this.province = province;
  }


  public Integer getGraduateNum() {
    return graduateNum;
  }

  public void setGraduateNum(Integer graduateNum) {
    this.graduateNum = graduateNum;
  }

}
