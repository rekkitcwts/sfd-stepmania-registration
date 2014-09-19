#!/usr/bin/env python

from dosql import *
import cgi
import json

def index(req, fname, lname, mobile):
    firstName = cgi.escape(fname)
    lastName = cgi.escape(lname)
    mobileNum = cgi.escape(mobile)

    x = doSql()
    x.execqry("INSERT INTO participants (lname, fname, mobile) VALUES (\'"+ lname +"\', \'"+ fname +"\', \'"+ mobile +"\')", False)

    return "AUSTRALIA"