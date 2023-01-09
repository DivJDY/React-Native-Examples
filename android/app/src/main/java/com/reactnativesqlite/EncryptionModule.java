package com.reactnativesqlite;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class EncryptionModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "Encryptor"; // Name of the Native Modules.
    }
    
    /**
* @param plainText Text to be encrypted(from JS layer)
*/
@ReactMethod
public void encrypt(String plainText, Promise promise) {
    try {
        // Add your encryption logic here 
        // (can use any JAVA encryption library or use default)
        String encryptedText = plainText + "This is encrypted text";

        // int key = 1;
        // String encryptedText;
        // char[] chars = plainText.toCharArray(); 
        // for (char c : chars) {
        //     c -= key;
        //     System.out.println(c);
        //     encryptedText = c;
        // }
        

       

        promise.resolve(encryptedText); // return encryptedText
    } catch (Exception e) {
        promise.reject("ENCRYPTION_FAILED", "Encryption Failed");
    }
}

/**
* @param encryptedText Text to be decrypted(from JS layer)
*/
@ReactMethod
public void decrypt(String encryptedText, Promise promise) {
    try {
      // Add your decryption logic here 
      // (can use any JAVA decryption library or use default)
      String decryptedText = encryptedText + "This is decrypted text";
        //  int key = 1;
        //      String decryptedText;
        // char[] chars = encryptedText.toCharArray(); 
        // for (char c : chars) {
        //     c += key;
        //     System.out.println(c);
        //     decryptedText = c;
        // }
      promise.resolve(decryptedText); // return decryptedText
    } catch (Exception e) {
      promise.reject("DECRYPTION_FAILED", "Decryption Failed");
    }
}
}
