package com.huatec.datahome.domain;

import java.util.List;
import java.util.Map;

/**
 * @author fc
 * @date 2018/1/5
 */

public class KeyListValMapDO {
    private List<String> name;
    private Map<String, Object> value;

    public List<String> getName() {
        return name;
    }

    public void setName(List<String> name) {
        this.name = name;
    }

    public Map<String, Object> getValue() {
        return value;
    }

    public void setValue(Map<String, Object> value) {
        this.value = value;
    }
}
