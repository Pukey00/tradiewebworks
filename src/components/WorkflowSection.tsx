import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
  {
    id: '1',
    position: { x: 50, y: 100 },
    data: { label: 'Choose Plan' },
    type: 'input',
    style: { background: '#F97316', color: 'white', borderRadius: '8px', padding: '10px' }
  },
  {
    id: '2',
    position: { x: 250, y: 100 },
    data: { label: 'Setup Website' },
    style: { background: '#0F172A', color: 'white', borderRadius: '8px', padding: '10px' }
  },
  {
    id: '3',
    position: { x: 450, y: 100 },
    data: { label: 'Launch & Maintain' },
    type: 'output',
    style: { background: '#64748B', color: 'white', borderRadius: '8px', padding: '10px' }
  }
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true }
];

export const WorkflowSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tradie-navy">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple process, exceptional results
          </p>
        </div>
        <div className="h-[300px] w-full border border-gray-200 rounded-lg bg-white">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            className="bg-white"
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
};