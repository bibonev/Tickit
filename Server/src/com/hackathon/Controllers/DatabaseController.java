package com.hackathon.Controllers;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseController
{
	public static void connect()
	{
		Connection connection = null;
		try
		{
			String url = "jdbc:sqlite:Database/hackathon";
			connection = DriverManager.getConnection(url);
			System.out.println("Connected to the database.");
			connection.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
