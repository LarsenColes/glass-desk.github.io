#!/usr/bin/env python

import os
import sys
def default():
	if len(sys.argv) > 1:
	  output = sys.argv[1]
	else:
	  output = "no argument found"

	return output

default()