package com.huatec.datahome.domain;


public class RequiredBoutiqueCourseDO {

  
    /**
     * 课程名称（精品课程、必修课程）
     */
  private String courseCategory;
  
    /**
     * null
     */
  private Integer courseNum;


  public String getCourseCategory() {
    return courseCategory;
  }

  public void setCourseCategory(String courseCategory) {
    this.courseCategory = courseCategory;
  }


  public Integer getCourseNum() {
    return courseNum;
  }

  public void setCourseNum(Integer courseNum) {
    this.courseNum = courseNum;
  }

}
