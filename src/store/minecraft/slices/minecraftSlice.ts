import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MinecraftSlice } from '../types';
import { MinecraftSkillTree } from '@/types/global.types';


const initialState: MinecraftSlice = {
	nodes: [],
	loading: false,
	error: null,
};

// Slice de redux para el manejo de la autenticacion
export const minecraftSlice = createSlice({
	name: 'Minecraft-Skill-Tree',
	initialState,
	reducers: {
		// Acciones sincronas
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.loading = payload;
		},

		setError: (state, { payload }: PayloadAction<string | null>) => {
			state.error = payload;
		},

		changeTree: (state, { payload }: PayloadAction<{ nodes: MinecraftSkillTree[] }>) => {
			state.nodes = payload.nodes;
			state.loading = false;
		},

		changeNode: (state, { payload }: PayloadAction<MinecraftSkillTree>) => {
			const index = state.nodes.findIndex((node) => node.id === payload.id);
			if (index !== -1) {
				state.nodes[index].completed =  true;
			}
		}
	},
});

export const { changeNode, changeTree, setLoading, setError } = minecraftSlice.actions;
