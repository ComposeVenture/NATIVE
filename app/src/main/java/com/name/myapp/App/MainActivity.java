package com.composeventure.compose_contacts;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends Activity {
    private WebView webView;
    private WebChromeClientImpl webChromeClientImpl;
    private BackPressHandler backPressHandler;
    private FileChooserHandler fileChooserHandler;
    private CameraInterface cameraInterface; // Declare the cameraInterface

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        webView = findViewById(R.id.webview);
        WebViewInitializer.initializeWebView(this, webView);
        
        WebViewClientImpl webViewClientImpl = new WebViewClientImpl(this, webView);
        webView.setWebViewClient(webViewClientImpl);
        
        webChromeClientImpl = new WebChromeClientImpl();
        webView.setWebChromeClient(webChromeClientImpl);
        
        String html = HtmlContent.getHtml(); 
        webView.loadDataWithBaseURL("file:///android_res/", html, "text/html", "UTF-8", null);
        
        webView.addJavascriptInterface(new WebAppInterface(this, webView), "Android");

        // Initialize cameraInterface here
        cameraInterface = new CameraInterface(this);

        backPressHandler = new BackPressHandler(this, webView);
        fileChooserHandler = new FileChooserHandler(webChromeClientImpl);
    }

    @Override
    public void onBackPressed() {
        backPressHandler.handleBackPressed();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        fileChooserHandler.handleActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        // Call the handlePermissionResult method on the cameraInterface instance
        cameraInterface.handlePermissionResult(requestCode, permissions, grantResults);
    }
}
