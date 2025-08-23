'use client';
import { useState } from 'react';
import Counter from "@/app/components/reconcilaton/Counter";

export default function ReconcilationOne() {
    const [showB, setShowB] = useState(true);
    return (
        <div>
            <Counter />
            {showB && <Counter />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}

