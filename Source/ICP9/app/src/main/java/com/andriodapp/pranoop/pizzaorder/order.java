package com.andriodapp.pranoop.pizzaorder;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.widget.TextView;

public class order extends AppCompatActivity {

    TextView summaryText;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_order);

        summaryText = findViewById(R.id.summaryText);
        summaryText.setText("Hello");
    }
}
