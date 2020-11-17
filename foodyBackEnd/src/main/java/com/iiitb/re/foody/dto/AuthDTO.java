package com.iiitb.re.foody.dto;

public class AuthDTO {
    boolean isAuthenticated;
    AuthDTO(boolean auth){
        this.isAuthenticated = auth;
    }
}
