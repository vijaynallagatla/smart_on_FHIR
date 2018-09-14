# smart_on_FHIR
SMART on FHIR - Fast Healthcare Interoperability Resources

This Android Application serves the Physicians with the Patient's Vital signs, Admittance, History and medication.

Get Patient Details By Name
https://fhir-open-api-dstu2.smarthealthit.org/Patient?name=&_count=
https://fhir-open-api-dstu2.smarthealthit.org/DiagnosticReport?identifier=1045813

Get Patient Detials By Patient ID
https://fhir-open-api-dstu2.smarthealthit.org/Patient?_id=1081332

https://fhir-open-api-dstu2.smarthealthit.org/Patient/1081332


Get all Observations based on last modified Time
https://fhir-open-api-dstu2.smarthealthit.org/Observation?_lastUpdated=>2010-10-01

Get Details Based on Condition ID
https://fhir-open-api-dstu2.smarthealthit.org/Condition/100


Getting all Patients details by Gender
https://fhir-open-api-dstu2.smarthealthit.org/Patient?gender=male

https://fhir-open-api-dstu2.smarthealthit.org/Patient?gender:not=male

Active Patients Details
https://fhir-open-api-dstu2.smarthealthit.org/Patient?active=true

Condition of a Patient
1)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?code=http://acme.org/conditions/codes|ha125
2)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?code:text=headache
3)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?code:text=fever
4)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?code:text=heart failure
5)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?=cardiac-conditions
6)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?subject=Patient/23
7)	https://fhir-open-api-dstu2.smarthealthit.org/Condition?text:fever
Observation
1)	https://fhir-open-api-dstu2.smarthealthit.org/Observation?value=5.4|http://unitsofmeasure.org|mg         - With this we can find current smokers state
Medication Order
•	https://fhir-open-api-dstu2.smarthealthit.org/MedicationOrder/22#



