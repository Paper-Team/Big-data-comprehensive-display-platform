package com.huatec.datahome.domain;

public class KeyStrValLongDO {

    private String name;

    private Long value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }

    public KeyStrValLongDO(String name, Long value) {
        this.name = name;
        this.value = value;
    }
}
