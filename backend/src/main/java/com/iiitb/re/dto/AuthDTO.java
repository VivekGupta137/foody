package com.iiitb.re.dto;

public class AuthDTO {
    boolean isAuthenticated;

    AuthDTO(boolean auth) {
        this.isAuthenticated = auth;
    }
}
