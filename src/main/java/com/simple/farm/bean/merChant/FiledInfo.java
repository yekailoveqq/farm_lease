package com.simple.farm.bean.merChant;

public class FiledInfo {
    private Integer id;

    private Integer merchantid;

    private Integer size;

    private String monitorurl;

    private String name;

    private String state;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMerchantid() {
        return merchantid;
    }

    public void setMerchantid(Integer merchantid) {
        this.merchantid = merchantid;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getMonitorurl() {
        return monitorurl;
    }

    public void setMonitorurl(String monitorurl) {
        this.monitorurl = monitorurl == null ? null : monitorurl.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state == null ? null : state.trim();
    }
}