export interface HoverDoc {
  title: string;
  body: string;
  syntax?: string;
  example?: string;
  notes?: string;
}

export const hoverDocs: Record<string, HoverDoc> = {
  // ---------------------------------------------------------------------------
  // Motion / coordinate / mode G commands
  // ---------------------------------------------------------------------------

  G0: {
    title: "G0 – Rapid traverse",
    syntax: "G0 X... Y... Z...",
    example: "G0 X100 Y50 Z10",
    notes: "Axes move as fast as possible to the specified coordinates. A specific path shape is not guaranteed.",
    body: "Moves the machine in rapid traverse to the programmed target position."
  },
  G1: {
    title: "G1 – Linear interpolation",
    syntax: "G1 X... Y... Z... F...",
    example: "G1 X50 Y20 F200",
    notes: "If no F value is given in the current block, the last programmed feed rate remains active.",
    body: "Moves the tool to the target coordinates along a straight path at feed rate F."
  },
  G2: {
    title: "G2 – Circular interpolation, clockwise",
    syntax: "G2 X... Y... I... J...\nG2 X... Z... I... K...\nG2 X... Y... R...",
    example: "G2 X50 Y110 I0 J50",
    notes: "KinetiC-NC determines the arc plane automatically from the I/J/K parameters. Radius format with R is also supported. Helical interpolation is possible by adding the coordinate perpendicular to the arc plane.",
    body: "Moves the tool on a clockwise circular arc to the programmed end point."
  },
  G3: {
    title: "G3 – Circular interpolation, counterclockwise",
    syntax: "G3 X... Y... I... J...\nG3 X... Z... I... K...\nG3 X... Y... R...",
    example: "G3 X10 Y100 R10",
    notes: "Works like G2, but counterclockwise. Helical interpolation is possible in the same way as with G2.",
    body: "Moves the tool on a counterclockwise circular arc to the programmed end point."
  },
  G4: {
    title: "G4 – Dwell",
    syntax: "G4 H...\nG4 P...",
    example: "G4 H1.5",
    notes: "KinetiC-NC primarily uses H for dwell time in seconds. P is accepted for compatibility, but should be given in the same line. G4 can also be combined with UNTIL.",
    body: "Waits for the programmed dwell time before continuing with the next command."
  },

  G20: {
    title: "G20 – Inch mode",
    syntax: "G20",
    example: "G20",
    notes: "This changes the unit used for linear coordinates in the NC program. The screen display unit remains unchanged.",
    body: "Switches the coordinate unit to inches."
  },
  G21: {
    title: "G21 – Millimeter mode",
    syntax: "G21",
    example: "G21",
    notes: "This changes the unit used for linear coordinates in the NC program. The screen display unit remains unchanged.",
    body: "Switches the coordinate unit to millimeters."
  },

  G28: {
    title: "G28 – Approach park position",
    syntax: "G28",
    example: "G28",
    notes: "Moves to the configured parking or tool-change position in rapid traverse. If the parking Z is above the current position, Z is moved first to reduce collision risk.",
    body: "Moves the machine to the stored park or tool-change position."
  },

  G53: {
    title: "G53 – Cancel zero offset",
    syntax: "G53",
    example: "G53",
    body: "Cancels the active work offset and restores the fixed machine coordinate system."
  },
  G54: {
    title: "G54 – Activate zero offset 1",
    syntax: "G54",
    example: "G54",
    body: "Activates work offset memory 1."
  },
  G55: {
    title: "G55 – Activate zero offset 2",
    syntax: "G55",
    example: "G55",
    body: "Activates work offset memory 2."
  },
  G56: {
    title: "G56 – Activate zero offset 3",
    syntax: "G56",
    example: "G56",
    body: "Activates work offset memory 3."
  },
  G57: {
    title: "G57 – Activate zero offset 4",
    syntax: "G57",
    example: "G57",
    body: "Activates work offset memory 4."
  },
  G58: {
    title: "G58 – Activate zero offset 5",
    syntax: "G58",
    example: "G58",
    body: "Activates work offset memory 5."
  },
  G59: {
    title: "G59 – Activate zero offset 6",
    syntax: "G59",
    example: "G59",
    body: "Activates work offset memory 6."
  },
  G61: {
    title: "G61 – Exact-stop mode",
    syntax: "G61",
    example: "G61",
    notes: "Turns off edge rounding. Corner points are approached exactly, which usually requires braking to a stop and re-accelerating.",
    body: "Enables exact-stop mode for path execution."
  },
  G62: {
    title: "G62 – Constant Velocity mode",
    syntax: "G62",
    example: "G62",
    notes: "Turns on automatic corner rounding / polygon smoothing. The allowed path deviation depends on machine parameters.",
    body: "Enables Constant Velocity mode with smoothed path transitions."
  },
  G64: {
    title: "G64 – Constant Velocity mode",
    syntax: "G64",
    example: "G64",
    notes: "Equivalent mode family to G62 for edge rounding / polygon smoothing.",
    body: "Enables Constant Velocity mode with smoothed path transitions."
  },
  G90: {
    title: "G90 – Absolute coordinates",
    syntax: "G90",
    example: "G90",
    body: "Interprets programmed coordinates as absolute positions in the active coordinate system."
  },
  G91: {
    title: "G91 – Incremental coordinates",
    syntax: "G91",
    example: "G91",
    body: "Interprets programmed coordinates as relative moves from the current position."
  },
  G92: {
    title: "G92 – Set coordinates",
    syntax: "G92 X... Y... Z...",
    example: "G92 X0 Y0 Z0",
    notes: "Changes only the coordinate offset; it does not move the machine.",
    body: "Sets the current coordinates by modifying the active offset."
  },
  G17: {
    title: "G17 – Select XY plane",
    syntax: "G17",
    example: "G17",
    notes: "KinetiC-NC allows G17/G18/G19, but for G2/G3 the active arc plane is effectively inferred from the I/J/K parameters.",
    body: "Selects the XY plane for circular arc interpretation."
  },
  G18: {
    title: "G18 – Select XZ plane",
    syntax: "G18",
    example: "G18",
    notes: "KinetiC-NC allows G17/G18/G19, but for G2/G3 the active arc plane is effectively inferred from the I/J/K parameters.",
    body: "Selects the XZ plane for circular arc interpretation."
  },
  G19: {
    title: "G19 – Select YZ plane",
    syntax: "G19",
    example: "G19",
    notes: "KinetiC-NC allows G17/G18/G19, but for G2/G3 the active arc plane is effectively inferred from the I/J/K parameters.",
    body: "Selects the YZ plane for circular arc interpretation."
  },

  G40: {
    title: "G40 – Cancel tool radius compensation",
    syntax: "G40",
    example: "G40",
    notes: "The first G1/G2/G3 move after G40 is the departure move. It starts from shifted coordinates and ends at unshifted coordinates, and should be at least one cutter radius long.",
    body: "Cancels active cutter radius compensation."
  },
  G41: {
    title: "G41 – Tool radius compensation left",
    syntax: "G41",
    example: "G41",
    notes: "Offsets the tool path to the left in the direction of travel using the cutter radius from the tool list. The first G1/G2/G3 move after G41 is the lead-in move and should start outside the material and be at least one cutter radius long.",
    body: "Activates cutter radius compensation to the left of the programmed contour."
  },
  G42: {
    title: "G42 – Tool radius compensation right",
    syntax: "G42",
    example: "G42",
    notes: "Offsets the tool path to the right in the direction of travel using the cutter radius from the tool list. The first G1/G2/G3 move after G42 is the lead-in move and should start outside the material and be at least one cutter radius long.",
    body: "Activates cutter radius compensation to the right of the programmed contour."
  },

  G43: {
    title: "G43 – Activate tool length compensation",
    syntax: "G43",
    example: "G43",
    notes: "For subsequent motion commands, the current tool length from the tool list is added to the Z coordinate. The preview can be confusing because it always shows tool-tip motion.",
    body: "Activates tool length compensation."
  },
  G49: {
    title: "G49 – Cancel tool length compensation",
    syntax: "G49",
    example: "G49",
    notes: "After G49, no further tool length is added to subsequent Z coordinates.",
    body: "Cancels active tool length compensation."
  },

  G52: {
    title: "G52 – Approach reference point",
    syntax: "G52\nG52 Z0 A0",
    example: "G52 Z0 A0",
    notes: "Equivalent to G74 in KinetiC-NC. Usually not needed because the controller ensures homing before the first program run after power-up. Selective homing is possible by specifying axes with zero coordinates; Z is always retracted first.",
    body: "Starts a homing / reference run for all axes or for selected axes."
  },
  G74: {
    title: "G74 – Approach reference point",
    syntax: "G74\nG74 Z0 A0",
    example: "G74 Z0 A0",
    notes: "Equivalent to G52 in KinetiC-NC. Usually not needed because the controller ensures homing before the first program run after power-up. Selective homing is possible by specifying axes with zero coordinates; Z is always retracted first.",
    body: "Starts a homing / reference run for all axes or for selected axes."
  },
  G69: {
    title: "G69 – Cancel coordinate system rotation",
    syntax: "G69",
    example: "G69",
    notes: "The command is listed by the manual as cancelling the rotated coordinate system. Detailed behavior depends on whether such rotation is used in the machine setup or macros.",
    body: "Cancels an active coordinate system rotation."
  },
  G73: {
    title: "G73 – Drilling with chip breaking",
    syntax: "G73 Z... R... Q... P...",
    example: "G73 Z-30 R5 Q2 P0.3",
    notes: "Implemented through a macro. In KinetiC-NC, G73 is predefined by default. It behaves like G83, but instead of fully retracting between steps, it only pauses briefly to break the chip.",
    body: "Executes a chip-breaking drilling cycle with stepped infeed."
  },
  G79: {
    title: "G79 – Tool length measurement",
    syntax: "G79",
    example: "G79",
    notes: "Implemented through a machine-dependent macro, typically using a tool length sensor or touch-off switch. The manual shows an example where the tool is moved down until a switch input becomes active and the measured length is then written to the tool table.",
    body: "Calls the automatic tool length measurement routine."
  },
  G80: {
    title: "G80 – Cancel drilling cycle",
    syntax: "G80",
    example: "G80",
    notes: "Listed as optional in the manual. Used after a hole pattern to cancel the currently active drilling cycle.",
    body: "Cancels the active drilling cycle."
  },
  G81: {
    title: "G81 – Simple drilling cycle",
    syntax: "G81 Z... R...",
    example: "G81 Z-20 R5",
    notes: "Implemented through a macro and predefined by default in KinetiC-NC. Drills to depth Z at feed rate F, then retracts once to return height R.",
    body: "Executes a simple drilling cycle to target depth and retract height."
  },
  G82: {
    title: "G82 – Spot drilling / countersink cycle",
    syntax: "G82 Z... R... P...",
    example: "G82 Z-5 R2 P0.2",
    notes: "Implemented through a macro and predefined by default in KinetiC-NC. Like G81, but includes a dwell time P at the bottom of the hole.",
    body: "Executes a drilling cycle with dwell at target depth."
  },
  G83: {
    title: "G83 – Deep-hole drilling cycle",
    syntax: "G83 Z... R... Q... P...",
    example: "G83 Z-30 R5 Q2 P0.3",
    notes: "Implemented through a macro and predefined by default in KinetiC-NC. The drilling depth is split into steps of Q, with full retraction between steps for chip evacuation.",
    body: "Executes a peck-drilling cycle for deeper holes."
  },
  G84: {
    title: "G84 – Tapping cycle",
    syntax: "G84 Z... R...",
    example: "G84 Z-12 R3",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the tapping cycle macro, if defined."
  },
  G85: {
    title: "G85 – Reaming cycle",
    syntax: "G85 Z... R...",
    example: "G85 Z-10 R3",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the reaming cycle macro, if defined."
  },
  G86: {
    title: "G86 – Boring cycle",
    syntax: "G86 Z... R...",
    example: "G86 Z-15 R3",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the boring cycle macro, if defined."
  },
  G87: {
    title: "G87 – Back boring / countersink cycle",
    syntax: "G87 Z... R...",
    example: "G87 Z-8 R2",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the back boring or countersink cycle macro, if defined."
  },
  G88: {
    title: "G88 – Countersink with dwell cycle",
    syntax: "G88 Z... R... P...",
    example: "G88 Z-6 R2 P0.2",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the countersink-with-dwell cycle macro, if defined."
  },
  G89: {
    title: "G89 – Reaming with dwell cycle",
    syntax: "G89 Z... R... P...",
    example: "G89 Z-10 R3 P0.2",
    notes: "Not defined by default in KinetiC-NC. A suitable macro must be added for the machine.",
    body: "Calls the reaming-with-dwell cycle macro, if defined."
  },

  // ---------------------------------------------------------------------------
  // Spindle / tool commands
  // ---------------------------------------------------------------------------

  M0: {
    title: "M0 – Programmed stop",
    syntax: "M0",
    example: "M0",
    notes: "Useful for test runs, manual checks, or operator confirmation between machining steps.",
    body: "Stops program execution and waits for manual confirmation by the operator."
  },
  M2: {
    title: "M2 – End of program",
    syntax: "M2",
    example: "M2",
    notes: "Terminates the current program and switches off active units such as spindle and coolant. Lines after M2 are not executed.",
    body: "Ends the running program."
  },
  M3: {
    title: "M3 – Spindle on, clockwise",
    syntax: "M3 S...",
    example: "M3 S12000",
    body: "Starts the spindle in clockwise rotation."
  },
  M4: {
    title: "M4 – Spindle on, counterclockwise",
    syntax: "M4 S...",
    example: "M4 S6000",
    notes: "Only available if the machine supports reverse spindle rotation. If no S value is given, the last programmed spindle speed remains active.",
    body: "Starts the spindle motor in reverse direction."
  },
  M5: {
    title: "M5 – Spindle stop",
    syntax: "M5",
    example: "M5",
    body: "Stops the spindle."
  },
  M6: {
    title: "M6 – Tool change",
    syntax: "T<tool> M6",
    example: "T3 M6",
    notes: "The exact behavior depends on machine parameters and whether manual or automatic tool change is configured. In practice, either M6 or M66 macro logic may be executed.",
    body: "Performs a tool change to the selected tool number."
  },

  M7: {
    title: "M7 – Spray cooling on",
    syntax: "M7",
    example: "M7",
    body: "Switches on spray cooling or minimum-quantity lubrication."
  },
  M8: {
    title: "M8 – Coolant / extraction on",
    syntax: "M8",
    example: "M8",
    notes: "Depending on machine type, this usually switches on the first auxiliary unit, such as a coolant pump or chip extraction.",
    body: "Switches on coolant or chip extraction."
  },
  M9: {
    title: "M9 – Coolant / extraction off",
    syntax: "M9",
    example: "M9",
    notes: "Switches off the first auxiliary unit and spray cooling if present. At M2 or M30, all units are switched off automatically even if M9 was omitted.",
    body: "Switches off coolant, spray cooling, or chip extraction."
  },

  M14: {
    title: "M14 – Pen down / knife immerse",
    syntax: "M14",
    example: "M14",
    notes: "Used for tangential knife cutting to immerse the knife into the material.",
    body: "Lowers the tangential knife into the material."
  },
  M15: {
    title: "M15 – Pen up / knife lift",
    syntax: "M15",
    example: "M15",
    notes: "Used for tangential knife cutting to lift the knife out of the material.",
    body: "Raises the tangential knife out of the material."
  },

  M30: {
    title: "M30 – End of program with rewind",
    syntax: "M30",
    example: "M30",
    notes: "Like M2, but allows restart from the beginning. Useful for repeated production of identical parts.",
    body: "Ends the program and rewinds it for restart."
  },

  M66: {
    title: "M66 – Manual tool change",
    syntax: "T<tool> M66",
    example: "T3 M66",
    notes: "Forces a manual tool change even if the machine has an automatic tool changer.",
    body: "Executes an explicit manual tool change."
  },

  M98: {
    title: "M98 – Subprogram call",
    syntax: "M98 P<number>",
    example: "M98 P1234",
    notes: "Calls a subprogram identified by an O-number. KinetiC-NC also supports CALL as a more flexible alternative with file names and arbitrary identifiers.",
    body: "Calls a numbered subprogram."
  },
  M99: {
    title: "M99 – Return from subprogram",
    syntax: "M99",
    example: "M99",
    notes: "Returns to the line after the last M98 in the main program. RETURN can also be used as an alternative.",
    body: "Returns from a subprogram to the caller."
  },

  // ---------------------------------------------------------------------------
  // Macro control flow
  // ---------------------------------------------------------------------------

  IF: {
    title: "IF – Conditional execution",
    syntax: "IF <condition> THEN <statement>",
    example: "IF #I13=1 THEN SKIP READY",
    body: "Starts a conditional statement. Used together with a comparison and THEN."
  },
  THEN: {
    title: "THEN – Conditional continuation",
    syntax: "IF <condition> THEN <statement>",
    example: "IF #100>0 THEN #O5=1",
    body: "Completes an IF ... THEN condition and causes the following statement to execute only when the condition is true."
  },
  UNTIL: {
    title: "UNTIL – Termination condition",
    syntax: "G1 ... UNTIL <condition>\nG4 ... UNTIL <condition>",
    example: "G1 X100 F200 UNTIL #I13=1",
    notes: "In KinetiC-NC this is currently limited to simple conditions using a single input signal.",
    body: "Adds an abort or termination condition to G1 or G4."
  },
  REPEAT: {
    title: "REPEAT – Loop start",
    syntax: "REPEAT=<count>\n...\nNEXT",
    example: "REPEAT=3\nG1 X=X+10\nNEXT",
    body: "Starts a counted loop. The block between REPEAT and NEXT is executed the programmed number of times."
  },
  NEXT: {
    title: "NEXT – Loop end",
    syntax: "REPEAT=<count>\n...\nNEXT",
    example: "REPEAT=3\nG1 X=X+10\nNEXT",
    body: "Marks the end of a REPEAT loop and returns control to the loop start until the repeat count is exhausted."
  },
  SKIP: {
    title: "SKIP – Jump to label",
    syntax: "SKIP <label>",
    example: "SKIP READY",
    notes: "Intended for forward branching; loops should use REPEAT ... NEXT.",
    body: "Jumps forward to a label in the program."
  },
  CALL: {
    title: "CALL – Subprogram call",
    syntax: "CALL \"subprogram.txt\"",
    example: "CALL \"SUBD9@connector.txt\"",
    body: "Calls a subroutine by label and optionally file name. This allows reusable subprogram libraries across macro files."
  },

  // ---------------------------------------------------------------------------
  // User interaction / dialogs
  // ---------------------------------------------------------------------------

  PRINT: {
    title: "PRINT – Text output",
    syntax: "PRINT \"Text\";#100;T",
    example: "PRINT \"Tool no = \";T",
    body: "Prints text and variable values to the message window. Texts and values are separated with semicolons."
  },
  ASKBOOL: {
    title: "ASKBOOL – Confirmation / decision dialog",
    syntax: "ASKBOOL \"Question\"",
    example: "ASKBOOL \"Continue?\"",
    body: "Shows a dialog and waits for confirmation or a Yes/No style decision. The result is returned via #0 where applicable."
  },
  ASKINT: {
    title: "ASKINT – Integer input dialog",
    syntax: "ASKINT \"Prompt\" I=<min> J=<max>",
    example: "ASKINT \"Enter count\" I=1 J=10",
    body: "Shows a dialog for integer input. Optional I and J parameters define minimum and maximum limits. The result is returned in #0."
  },
  ASKFLT: {
    title: "ASKFLT – Floating-point input dialog",
    syntax: "ASKFLT \"Prompt\" I=<min> J=<max>",
    example: "ASKFLT \"Enter offset\" I=0 J=5",
    body: "Like ASKINT, but for floating-point numeric input. The result is returned in #0."
  },

  // ---------------------------------------------------------------------------
  // Parameter words
  // ---------------------------------------------------------------------------

  F: {
    title: "F – Feed rate",
    syntax: "F<value>",
    example: "F200",
    body: "Programs the feed rate for subsequent motion commands."
  },
  S: {
    title: "S – Spindle speed",
    syntax: "S<value>",
    example: "S12000",
    body: "Programs the spindle speed."
  },
  T: {
    title: "T – Tool selection",
    syntax: "T<value>",
    example: "T3",
    body: "Selects a tool number."
  },

  // ---------------------------------------------------------------------------
  // Variable families
  // ---------------------------------------------------------------------------

  "#": {
    title: "#nnn – Numeric variable",
    syntax: "#100\n#100=5\n#101=#100+1",
    example: "#100=#100+1",
    notes: "Indexed access with square brackets is also supported.",
    body: "References a numeric variable. Variables can be used in assignments and comparisons."
  },
  "#I": {
    title: "#Inn – Input variable",
    syntax: "#I13",
    example: "IF #I13=1 THEN SKIP READY",
    notes: "Inputs are read-only in expressions and comparisons.",
    body: "References a logical input signal."
  },
  "#O": {
    title: "#Onn – Output variable",
    syntax: "#O5=1",
    example: "#O5=1",
    notes: "Outputs are written in assignments and typically accept 0 or 1.",
    body: "References a logical output signal."
  },
  "#0": {
    title: "#0 – General-purpose variable / dialog return value",
    syntax: "#0\n#0=5\nASKINT \"Enter value\" I=1 J=10",
    example: "ASKINT \"Enter count\" I=1 J=10\n#100=#0",
    notes: "ASKBOOL, ASKINT, and ASKFLT use #0 to return the user response or entered value.",
    body: "References numeric variable #0. It behaves like a normal variable, but is also commonly used as the return variable for dialog commands."
  },
  "#900": {
    title: "#900 – Current offset X coordinate",
    syntax: "#900",
    example: 'PRINT "Offset X = ";#900',
    notes: "Part of the current zero-point memory image used together with #901..#908 and #909.",
    body: "Stores the X coordinate of the currently selected zero-point offset."
  },
  "#901": {
    title: "#901 – Current offset Y coordinate",
    syntax: "#901",
    example: 'PRINT "Offset Y = ";#901',
    notes: "Part of the current zero-point memory image used together with #900 and #902..#909.",
    body: "Stores the Y coordinate of the currently selected zero-point offset."
  },
  "#902": {
    title: "#902 – Current offset Z coordinate",
    syntax: "#902",
    example: "#902=#0-#4",
    notes: "Often used in probing macros to modify the Z value of the active offset before saving it with L53.",
    body: "Stores the Z coordinate of the currently selected zero-point offset."
  },
  "#903": {
    title: "#903 – Current offset A coordinate",
    syntax: "#903",
    example: 'PRINT "Offset A = ";#903',
    body: "Stores the A-axis coordinate of the currently selected zero-point offset."
  },
  "#904": {
    title: "#904 – Current offset B coordinate",
    syntax: "#904",
    example: 'PRINT "Offset B = ";#904',
    body: "Stores the B-axis coordinate of the currently selected zero-point offset."
  },
  "#905": {
    title: "#905 – Current offset C coordinate",
    syntax: "#905",
    example: 'PRINT "Offset C = ";#905',
    body: "Stores the C-axis coordinate of the currently selected zero-point offset."
  },
  "#906": {
    title: "#906 – Current offset U coordinate",
    syntax: "#906",
    example: 'PRINT "Offset U = ";#906',
    body: "Stores the U-axis coordinate of the currently selected zero-point offset."
  },
  "#907": {
    title: "#907 – Current offset V coordinate",
    syntax: "#907",
    example: 'PRINT "Offset V = ";#907',
    body: "Stores the V-axis coordinate of the currently selected zero-point offset."
  },
  "#908": {
    title: "#908 – Current offset W coordinate",
    syntax: "#908",
    example: 'PRINT "Offset W = ";#908',
    body: "Stores the W-axis coordinate of the currently selected zero-point offset."
  },
  "#909": {
    title: "#909 – Current zero-point number",
    syntax: "#909",
    example: "#7=#909\nG53\n...\n#909=#7",
    notes: "0 = G53, 1 = G54, and so on. The manual shows saving #909 before switching to G53 and restoring it afterwards in macros.",
    body: "Stores the number of the currently active zero-point memory."
  }
};
