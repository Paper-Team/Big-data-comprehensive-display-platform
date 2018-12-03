package com.huatec.datahome.domain;

import com.alibaba.fastjson.JSON;

/**
 * 专业分析基本数据
 *
 * @author HF
 * @date 2018-04-28
 */
public class MajorBasicDO {
  
    /**
     * 专业名称
     */
  private String majorName;
  
    /**
     * 学生数量
     */
  private Integer majorStudent;
  
    /**
     * 教材数量
     */
  private Integer majorBook;
  
    /**
     * 师资数量
     */
  private Integer majorTeacher;

    /**
     * 课程数量
     */
  private Integer majorCourse;
  
    /**
     * 课时数量
     */
  private Integer majorCourseHour;
  
    /**
     * 满意度
     */
  private Float majorSatisfaction;
  
    /**
     * 本科数量
     */
  private Integer undergraduate;
  
    /**
     * 高职数量
     */
  private Integer vocational;
  
    /**
     * 开设时间
     */
  private String setupTime;

  public String getMajorName() {
    return majorName;
  }

  public void setMajorName(String majorName) {
    this.majorName = majorName;
  }

  public Integer getMajorStudent() {
    return majorStudent;
  }

  public void setMajorStudent(Integer majorStudent) {
    this.majorStudent = majorStudent;
  }

  public Integer getMajorBook() {
    return majorBook;
  }

  public void setMajorBook(Integer majorBook) {
    this.majorBook = majorBook;
  }

  public Integer getMajorTeacher() {
    return majorTeacher;
  }

  public void setMajorTeacher(Integer majorTeacher) {
    this.majorTeacher = majorTeacher;
  }

  public Integer getMajorCourse() {
    return majorCourse;
  }

  public void setMajorCourse(Integer majorCourse) {
    this.majorCourse = majorCourse;
  }

  public Integer getMajorCourseHour() {
    return majorCourseHour;
  }

  public void setMajorCourseHour(Integer majorCourseHour) {
    this.majorCourseHour = majorCourseHour;
  }

  public Float getMajorSatisfaction() {
    return majorSatisfaction;
  }

  public void setMajorSatisfaction(Float majorSatisfaction) {
    this.majorSatisfaction = majorSatisfaction;
  }

  public Integer getUndergraduate() {
    return undergraduate;
  }

  public void setUndergraduate(Integer undergraduate) {
    this.undergraduate = undergraduate;
  }

  public Integer getVocational() {
    return vocational;
  }

  public void setVocational(Integer vocational) {
    this.vocational = vocational;
  }

  public String getSetupTime() {
    return setupTime;
  }

  public void setSetupTime(String setupTime) {
    this.setupTime = setupTime;
  }

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }
}
