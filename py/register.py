#!/usr/bin/env python

from dosql import *
import cgi

try:
	import json
except ImportError:
	import simplejson as json

def index(req, fname, lname, mobile):
    firstName = cgi.escape(fname)
    lastName = cgi.escape(lname)
    mobileNum = cgi.escape(mobile)

    x = doSql()
    x.insert("INSERT INTO participants (lname, fname, mobile) VALUES (%s, %s, %s)", (lastName, firstName, mobileNum))

    return "AUSTRALIA"