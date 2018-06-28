package com.rashmi.android.umkc.edu.helloworldapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    Button b1,b2;
    EditText password,userName;

    TextView tx1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        b1 = (Button)findViewById(R.id.button);
        password = (EditText)findViewById(R.id.editTextPwd);
        userName = (EditText)findViewById(R.id.editTextUserName);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!userName.getText().toString().isEmpty()){
                    if(!password.getText().toString().isEmpty())
                    {
                        if (userName.getText().toString().equals("admin"))
                        {
                            if (password.getText().toString().equals("admin12345"))
                            {
                                //Toast.makeText(getApplicationContext(), "Successfully login.",Toast.LENGTH_SHORT).show();
                                Intent intent = new Intent(MainActivity.this, HomeActivity.class);
                                startActivity(intent);
                            }
                            else
                            {
                                Toast.makeText(getApplicationContext(), "PLease enter proper password values..",Toast.LENGTH_SHORT).show();
                            }
                        }
                        else
                        {
                            Toast.makeText(getApplicationContext(), "PLease enter proper user name values..",Toast.LENGTH_SHORT).show();
                        }
                    }
                    else
                    {
                        Toast.makeText(getApplicationContext(), "PLease enter password values..",Toast.LENGTH_SHORT).show();
                    }
                }
                else
                {
                    Toast.makeText(getApplicationContext(), "PLease enter user Name..",Toast.LENGTH_SHORT).show();
                }
            }
        });

    }



}
