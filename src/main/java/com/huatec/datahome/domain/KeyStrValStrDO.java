package com.huatec.datahome.domain;

import java.io.Serializable;

public class KeyStrValStrDO implements Serializable{

    private String name;

    private String value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
