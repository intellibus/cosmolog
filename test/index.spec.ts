import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Cosmolog Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'cosmolog');
});

export const { run } = test;
