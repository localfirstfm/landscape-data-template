// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'loro',
	Name: 'Loro',
	Logo: {
		Light: 'https://github.com/loro-dev/loro/blob/main/docs/Loro.svg',
		Dark: 'https://github.com/loro-dev/loro/blob/main/docs/Loro.svg',
	},
	Description: 'Make your JSON data collaborative and version-controlled with CRDTs',
	MaturityLevel: 'Production-Ready',
	Website: 'https://loro.dev',
	GitHub: 'https://github.com/loro-dev/loro',
	GetStarted: 'https://loro.dev/docs/tutorial/get_started',
	Deployment: ['Self-hosted'],
	License: 'MIT',
	InitialReleaseDate: new Date('2023-11-13'),
	AppTarget: {
		Platform: { data: ['Browser', 'Node', 'iOS', 'macOS', 'WASM', 'Linux'] },
		LanguageSDK: { data: ['typescript', 'javascript', 'Rust', 'Swift', 'Python'] },
		ClientBundleSize: { data: '~900 kB' },
	},
	Networking: {
		Topology: { data: 'P2P' },
		Protocol: { data: ['WebSockets', 'HTTP'] },
	},
	ServerSideData: {
		PersistenceMechanism: { data: ['Custom'] },
		DataModelParadigm: { data: 'Document' },
	},
	ClientSideData: {
		QueryAPI: { data: ['Async'] },
		LocalRefreshLatency: { data: '~1ms' },
		PersistenceMechanism: { data: ['IndexedDB', 'Custom'] },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: 'Up to 5-10 MB per document' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: { data: 'Automatic via CRDT' },
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'Ops',
				ClientToServer: 'Ops',
				ServerToClient: 'Ops',
			},
		},
		Authority: { data: 'Decentralized' },
	},
	UIRelated:{
		RichTextEditing: {
			data: 'Yes'
		},
		Components:{
			data: ['ProseMirror', 'CodeMirror']
		}
	},
	DevelopmentWorkflowsDX:{
		DebuggingTools:{
			data: ['Data Inspector'],
			comment: "https://loro.dev/docs/advanced/inspector"
		},
		TypeSupport:{
			data: 'TypeScript',
		},
	},
	UserControlDataOwnership: 'Yes',
})
