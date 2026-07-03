# Domain Model

## Goal
- name
- description()
- status(at): bad|ok|good|great|on_track
- history(from, until): [{date, value, status}]

## Objective: Goal
- description
- bases: [Relation]
- reasons: [Relation]

## Relation
- type: requirement|definition|progress|contributor|conflict|impediment
- inputs: [Goal]
- objectives: [Objective]

## Target: Goal
- Signal
- good
- bad

## Signal
- name
- description
- values(from, until): [{date, value}]

## Metric: Signal
- Source
- is_due(): Date
- add(value, at)

## Source
- measure(Metric)

## Smoothed: Signal
- input: Signal
- Span

## Change: Signal
- input: Signal
- Span

## Calculated: Signal
- inputs: [Signal]
- formula: stringSo jetz

## Span
- amount
- unit: hour|day|week|month|year
