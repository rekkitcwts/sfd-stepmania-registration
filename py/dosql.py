#!/usr/bin/env python

import sys
import psycopg2
from glob import *


class doSql(object):
    #attributes
    _cxn = ""
    _cur = ""
    errmsg ="" 
    #methods
    def __init__(self): #constructor
        self._cxn = psycopg2.connect("dbname='sfd_stepmania' user='postgres' password='desperaux' host='127.0.0.1' port='5432'")
        self._cur = self._cxn.cursor()
        
    def __del__(self): #destructor
        self._cur.close()
        self._cxn.close()

    def execqry(self, sql, apply_):
        rows = []
        try:
            self._cur.execute(sql)
            rows = self._cur.fetchall()
	    if apply_:
                self._cxn.commit()
            if self._cur.rowcount == 0:
                rows.append(['None'])
        except:
            #errmsg = sys.exc_type + ":" + sys.exc_value 
            errmsg =  str(sys.exc_info()[1])
            rows.append([errmsg])
        return rows

    def insert(self, sql, values):
        rows = []

        try:
            self._cur.execute(sql, values)
            self._cxn.commit()
            rows.append(['Insert OK!'])
        except:
            #errmsg = sys.exc_type + ":" + sys.exc_value 
            errmsg =  str(sys.exc_info()[1])
            rows.append([errmsg])
        return rows    

    
#a = doSql()
#f = a.execqry("select insupattendance('1321', 'CENG1-LEC', getcurrsem(), now()::timestamp without time zone, true)")[0][0] 
#print f
#del a
