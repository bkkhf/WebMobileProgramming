package com.rashmi.android.umkc.edu.helloworldapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;
import android.widget.Button;
import android.content.Intent;
import android.view.View;
public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

    }
    public void goback(View view){
                Intent intent = new Intent(HomeActivity.this,MainActivity.class);
                startActivity(intent);
            }


}
