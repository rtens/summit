# Domain Model

## Goal
- name
- description()
- status(at): bad|ok|good|great|on_track|unknown
- history(from, until): [{date, value, status}]

## Objective: Goal
- description
- bases: [Connection]
- reasons: [Connection]

## Connection
- type: requirement|definition|progress|contributor
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
- due(): Date
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
- formula

## Span
- amount
- unit: hour|day|week|month|year
