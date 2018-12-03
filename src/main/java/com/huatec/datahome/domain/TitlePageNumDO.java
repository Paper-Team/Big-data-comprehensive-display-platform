package com.huatec.datahome.domain;


public class TitlePageNumDO {

  
    /**
     * null
     */
  private String name;
  
    /**
     * 支持人员- 研发人员数量
     */
  private Integer dataUndergraduate;
  
    /**
     * 支撑人员-设计人员数量
     */
  private Integer dataVocational;
  
    /**
     * 1：合作院校、运营团队、支撑人员
            2：在校学生
            3：就业人数
            4：工程师行业背景行业人员数据
            5、工程师行业背景最大年限、平均年限数据
            
     */
  private Integer pageTitleNum;
  
    /**
     * 支持人员-实施人员数量
     */
  private Integer dataOther;


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public Integer getDataUndergraduate() {
    return dataUndergraduate;
  }

  public void setDataUndergraduate(Integer dataUndergraduate) {
    this.dataUndergraduate = dataUndergraduate;
  }


  public Integer getDataVocational() {
    return dataVocational;
  }

  public void setDataVocational(Integer dataVocational) {
    this.dataVocational = dataVocational;
  }


  public Integer getPageTitleNum() {
    return pageTitleNum;
  }

  public void setPageTitleNum(Integer pageTitleNum) {
    this.pageTitleNum = pageTitleNum;
  }


  public Integer getDataOther() {
    return dataOther;
  }

  public void setDataOther(Integer dataOther) {
    this.dataOther = dataOther;
  }

}
