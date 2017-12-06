package com.simple.farm.bean.merChant;

public class MerchantInfo {
    private Integer id;

    private String provice;

    private String city;

    private String town;

    private String merchantName;

    private String merchantAddress;

    private String merchantPhone;

    private String merchantFieldSize;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProvice() {
        return provice;
    }

    public void setProvice(String provice) {
        this.provice = provice == null ? null : provice.trim();
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city == null ? null : city.trim();
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town == null ? null : town.trim();
    }

    public String getMerchantName() {
        return merchantName;
    }

    public void setMerchantName(String merchantName) {
        this.merchantName = merchantName == null ? null : merchantName.trim();
    }

    public String getMerchantAddress() {
        return merchantAddress;
    }

    public void setMerchantAddress(String merchantAddress) {
        this.merchantAddress = merchantAddress == null ? null : merchantAddress.trim();
    }

    public String getMerchantPhone() {
        return merchantPhone;
    }

    public void setMerchantPhone(String merchantPhone) {
        this.merchantPhone = merchantPhone == null ? null : merchantPhone.trim();
    }

    public String getMerchantFieldSize() {
        return merchantFieldSize;
    }

    public void setMerchantFieldSize(String merchantFieldSize) {
        this.merchantFieldSize = merchantFieldSize == null ? null : merchantFieldSize.trim();
    }
}