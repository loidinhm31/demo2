package com.dms.auth.entities.interfaces;

public interface LoginAttemptStats {
    String getDate();
    Long getSuccessCount();
    Long getFailureCount();
}
