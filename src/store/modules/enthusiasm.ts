// Actions
const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM'
const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM'

export interface IncrementEnthusiasm {
    type: typeof INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
    type: typeof DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

const initialState = [];

// Reducer
export interface StoreState {
    languageName: string
    enthusiasmLevel: number
}

export default function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    }
    return state;
};


// Action Creators
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: DECREMENT_ENTHUSIASM
    }
}

