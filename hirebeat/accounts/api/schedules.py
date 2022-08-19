import os, sys, time, datetime
import threading
import re, collections
from django.forms.models import model_to_dict
from jobs.models import Jobs


selected_keywords = []

def statKeywords():
    skills = Jobs.objects.all().values_list('skills')
    skillKeywords = []
    for skSet in skills:
        for s in skSet[0]:
            skillKeywords.append(re.sub(r"'.+$", "", s[11:]))
    keywords_count = collections.Counter(skillKeywords).most_common(10)
    global selected_keywords
    selected_keywords = [i[0] for i in keywords_count]
    selected_keywords.append("All Jobs")
    print("Top job keywords generated")

def getTopKeywords():
    if len(selected_keywords) > 0:
        return selected_keywords
    else:
        statKeywords()
        startScheduledTask()
        return selected_keywords

def generateKeywordsWeekly():
    while True:
        try:
            time.sleep(604800)
            statKeywords()
        except Exception as e:
            continue

def startScheduledTask():
    try:
        task1 = threading.Thread(target = generateKeywordsWeekly)
        task1.start()
    except Exception as e:
        print('Failed to start scheduled task, error：%s' % str(e))

