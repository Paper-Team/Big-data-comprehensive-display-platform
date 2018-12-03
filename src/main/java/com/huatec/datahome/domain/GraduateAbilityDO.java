package com.huatec.datahome.domain;


public class GraduateAbilityDO {

  
    /**
     * null
     */
  private String ability;
  
    /**
     * null
     */
  private Integer abilityValue;
  
    /**
     * null
     */
  private String majorName;
  
  /**
   * 本科高职
   */
  private String type;


  public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public String getAbility() {
    return ability;
  }

  public void setAbility(String ability) {
    this.ability = ability;
  }


  public Integer getAbilityValue() {
    return abilityValue;
  }

  public void setAbilityValue(Integer abilityValue) {
    this.abilityValue = abilityValue;
  }


  public String getMajorName() {
    return majorName;
  }

  public void setMajorName(String majorName) {
    this.majorName = majorName;
  }

}
