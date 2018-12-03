package com.huatec.datahome.domain;

import java.io.Serializable;

/**
 * @author fc
 * @date 2017/12/22
 */

public class KeyStrValDoubleDO implements Serializable, Cloneable, Comparable<KeyStrValDoubleDO> {
    private String name;
    private Double value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    @Override
    protected Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException("克隆对象失败：" + e);
        }
    }

    @Override
    public int compareTo(KeyStrValDoubleDO o) {
        return o.getValue().compareTo(this.getValue());
    }
}
