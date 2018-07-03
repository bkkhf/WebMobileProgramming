package com.andriodapp.pranoop.pizzaorder;

import android.app.ActionBar;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.view.View;
import android.widget.ListView;
import android.widget.TextView;


public class OrderSummary extends AppCompatActivity {
    TextView summaryText1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_order_summary);

        summaryText1 = findViewById(R.id.summaryText);
        Intent intent = getIntent();
        Bundle extras = getIntent().getExtras();
        String id = extras.getString("OrderDetails");
        summaryText1.setText(id);




    }



}
