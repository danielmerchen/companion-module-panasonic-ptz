import { combineRgb } from '@companion-module/base'
import { getAndUpdateSeries } from './common.js'

// ##########################
// #### Define Feedbacks ####
// ##########################
export function getFeedbackDefinitions(self) {
	const feedbacks = {}

	const SERIES = getAndUpdateSeries(self)
	// console.log(SERIES);

	const foregroundColor = combineRgb(255, 255, 255) // White
	const backgroundColorRed = combineRgb(255, 0, 0) // Red
	const backgroundColorGreen = combineRgb(0, 255, 0) // Green
	const backgroundColorOrange = combineRgb(255, 102, 0) // Orange

	if (SERIES.feedbacks.powerState) {
		feedbacks.powerState = {
			type: 'boolean',
			name: 'System - Power State',
			description: 'Indicate if PTZ is ON or OFF',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'OFF' },
						{ id: '1', label: 'ON' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.power === 'OFF') {
							return true
						}
						break
					case '1':
						if (self.data.power === 'ON') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.tallyState) {
		feedbacks.tallyState = {
			type: 'boolean',
			name: 'System - Red Tally State',
			description: 'Indicate if red Tally is ON or OFF',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'OFF' },
						{ id: '1', label: 'ON' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.tally === 'OFF') {
							return true
						}
						break
					case '1':
						if (self.data.tally === 'ON') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.tally2State) {
		feedbacks.tally2State = {
			type: 'boolean',
			name: 'System - Green Tally State',
			description: 'Indicate if green Tally is ON or OFF',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorGreen,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'OFF' },
						{ id: '1', label: 'ON' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.tally2 === 'OFF') {
							return true
						}
						break
					case '1':
						if (self.data.tally2 === 'ON') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.insState) {
		feedbacks.insState = {
			type: 'boolean',
			name: 'System - Install Position',
			description: 'Indicate if PTZ is on Desktop or Hanging',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X position',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Desktop' },
						{ id: '1', label: 'Hanging' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.ins === 'Desktop') {
							return true
						}
						break
					case '1':
						if (self.data.ins === 'Hanging') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.autoFocus) {
		feedbacks.autoFocus = {
			type: 'boolean',
			name: 'Lens - Auto Focus State',
			description: 'Indicate if Auto focus is ON or OFF',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Manual' },
						{ id: '1', label: 'Auto' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.oaf === 'Manual') {
							return true
						}
						break
					case '1':
						if (self.data.oaf === 'Auto') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.autoIris) {
		feedbacks.autoIris = {
			type: 'boolean',
			name: 'Lens - Auto Iris State',
			description: 'Indicate if Auto iris is ON or OFF',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'option',
					default: '1',
					choices: [
						{ id: '0', label: 'Manual' },
						{ id: '1', label: 'Auto' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.irisMode === 'Manual') {
							return true
						}
						break
					case '1':
						if (self.data.irisMode === 'Auto') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.irisFstop) {
		feedbacks.irisFstopText = {
			type: 'advanced',
			name: 'Lens - F-number on button',
			description: 'Replaces the button text with "<label>" and the lens F-number read back from the camera (CLOSED when fully closed)',
			options: [{ type: 'textinput', label: 'Label (e.g. "f/")', id: 'label', default: 'f/', useVariables: false }],
			callback: function (feedback) {
				return { text: `${feedback.options.label}${self.data.irisFstop}` }
			},
		}
		feedbacks.irisFstopCompare = {
			type: 'boolean',
			name: 'Lens - F-number comparison',
			description: 'True while the lens F-number read back from the camera compares true against the value',
			defaultStyle: { color: foregroundColor, bgcolor: backgroundColorOrange },
			options: [
				{
					type: 'dropdown',
					label: 'F-number is',
					id: 'op',
					default: 'eq',
					choices: [
						{ id: 'eq', label: 'equal to (within 0.05)' },
						{ id: 'ge', label: 'at least (more closed)' },
						{ id: 'le', label: 'at most (more open)' },
					],
				},
				{ type: 'number', label: 'F-number', id: 'value', default: 2.8, min: 1, max: 64, step: 0.1 },
			],
			callback: function (feedback) {
				const f = parseFloat(self.data.irisFstop)
				if (!Number.isFinite(f)) return false
				const v = Number(feedback.options.value)
				switch (feedback.options.op) {
					case 'ge':
						return f >= v - 0.05
					case 'le':
						return f <= v + 0.05
					default:
						return Math.abs(f - v) < 0.05
				}
			},
		}
	}

	if (SERIES.feedbacks.masterBlack) {
		feedbacks.masterBlackText = {
			type: 'advanced',
			name: 'Color - Master black on button',
			description: 'Replaces the button text with "<label>" and the master black (master pedestal) read back from the camera',
			options: [{ type: 'textinput', label: 'Label', id: 'label', default: 'MB ', useVariables: false }],
			callback: function (feedback) {
				const v = self.data.masterBlack
				return { text: `${feedback.options.label}${typeof v === 'number' && v > 0 ? '+' : ''}${v}` }
			},
		}
		feedbacks.masterBlackCompare = {
			type: 'boolean',
			name: 'Color - Master black comparison',
			description: 'True while the master black read back from the camera compares true against the value',
			defaultStyle: { color: foregroundColor, bgcolor: backgroundColorOrange },
			options: [
				{
					type: 'dropdown',
					label: 'Master black is',
					id: 'op',
					default: 'eq',
					choices: [
						{ id: 'eq', label: 'equal to' },
						{ id: 'ge', label: 'at least' },
						{ id: 'le', label: 'at most' },
					],
				},
				{ type: 'number', label: 'Value (-200..200)', id: 'value', default: 0, min: -200, max: 200 },
			],
			callback: function (feedback) {
				const v = self.data.masterBlack
				if (typeof v !== 'number') return false
				const t = Number(feedback.options.value)
				switch (feedback.options.op) {
					case 'ge':
						return v >= t
					case 'le':
						return v <= t
					default:
						return v === t
				}
			},
		}
	}

	if (SERIES.feedbacks.preset) {
		feedbacks.recallModePset = {
			type: 'boolean',
			name: 'Preset - Mode A, B, C',
			description: 'Indicate what preset mode is curently selected on the camera',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Select Mode',
					id: 'option',
					default: '0',
					choices: [
						{ id: '0', label: 'Mode A - PTZ + Iris + WB/Color' },
						{ id: '1', label: 'Mode B - PTZ + Iris' },
						{ id: '2', label: 'Mode C - PTZ only' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				switch (opt.option) {
					case '0':
						if (self.data.recallModePset === 'Mode A') {
							return true
						}
						break
					case '1':
						if (self.data.recallModePset === 'Mode B') {
							return true
						}
						break
					case '2':
						if (self.data.recallModePset === 'Mode C') {
							return true
						}
						break
					default:
						break
				}
				return false
			},
		}
	}

	if (SERIES.feedbacks.colorBarsState) {
		feedbacks.colorBarsState = {
			type: 'boolean',
			name: 'System - Color Bars State',
			description: 'Indicate if color bars are shown or not',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'dropdown',
					label: 'Indicate in X State',
					id: 'state',
					default: '0',
					choices: [
						{ id: '0', label: 'OFF' },
						{ id: '1', label: 'ON' },
					],
				},
			],
			callback: function (feedback) {
				const opt = feedback.options
				if (self.data.colorBarsState === opt.state) {
					return true
				}
				return false
			},
		}

		if (SERIES.feedbacks.colorBarsStatusState) {
			feedbacks.colorBarsSetupState = {
				type: 'boolean',
				name: 'System - Color Bars Setup',
				description: 'Indicate if color bars setup is ON (7.5IRE) or OFF (0.0IRE)',
				defaultStyle: {
					color: foregroundColor,
					bgcolor: backgroundColorRed,
				},
				options: [
					{
						type: 'dropdown',
						label: 'Indicate in X State',
						id: 'state',
						default: '0',
						choices: [
							{ id: '0', label: 'OFF (0.0IRE)' },
							{ id: '1', label: 'ON (7.5IRE)' },
						],
					},
				],
				callback: function (feedback) {
					const opt = feedback.options
					if (self.data.colorBarsSetupState === opt.state) {
						return true
					}
					return false
				},
			}
		}

		if (SERIES.feedbacks.colorBarsTitleState) {
			feedbacks.colorBarsTitleState = {
				type: 'boolean',
				name: 'System - Color Bars Title',
				description: 'Indicate if color bars title is ON or OFF',
				defaultStyle: {
					color: foregroundColor,
					bgcolor: backgroundColorRed,
				},
				options: [
					{
						type: 'dropdown',
						label: 'Indicate in X State',
						id: 'state',
						default: '0',
						choices: [
							{ id: '0', label: 'OFF' },
							{ id: '1', label: 'ON' },
						],
					},
				],
				callback: function (feedback) {
					const opt = feedback.options
					if (self.data.colorBarsTitleState === opt.state) {
						return true
					}
					return false
				},
			}
		}

		if (SERIES.feedbacks.colorBarsToneState) {
			feedbacks.colorBarsToneState = {
				type: 'boolean',
				name: 'System - Color Bars Tone',
				description: 'Indicate what color bars tone is selected on camera',
				defaultStyle: {
					color: foregroundColor,
					bgcolor: backgroundColorRed,
				},
				options: [
					{
						type: 'dropdown',
						label: 'Indicate in X State',
						id: 'state',
						default: '0h',
						choices: [
							{ id: '0h', label: 'Off' },
							{ id: '1h', label: 'Low' },
							{ id: '2h', label: 'Normal' },
						],
					},
				],
				callback: function (feedback) {
					const opt = feedback.options
					if (self.data.colorBarsToneState === opt.state) {
						return true
					}
					return false
				},
			}
		}

		if (SERIES.feedbacks.colorBarsTypeState) {
			feedbacks.colorBarsToneState = {
				type: 'boolean',
				name: 'System - Color Bars Type',
				description: 'Indicate what color bars type is selected on camera',
				defaultStyle: {
					color: foregroundColor,
					bgcolor: backgroundColorRed,
				},
				options: [
					{
						type: 'dropdown',
						label: 'Indicate in X State',
						id: 'state',
						default: '1',
						choices: [
							{ id: '1', label: 'Type 1' },
							{ id: '0', label: 'Type 2' },
						],
					},
				],
				callback: function (feedback) {
					const opt = feedback.options
					if (self.data.colorBarsTypeState === opt.state) {
						return true
					}
					return false
				},
			}
		}
	}

	return feedbacks
}
