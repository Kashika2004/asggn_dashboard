import { query } from '../../utils/db';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const result = await query('SELECT * FROM assessments');
//       res.status(200).json(result.rows);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to fetch assessments' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }



export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const result = await query('SELECT * FROM assessments');
        res.status(200).json(result.rows);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch assessments' });
      }
    } else if (req.method === 'PUT') {
      const { id, status, score } = req.body;
  
      if (!id || !status) {
        return res.status(400).json({ error: 'ID and status are required' });
      }
  
      try {
        const result = await query(
          'UPDATE assessments SET status = $1, score = $2, "updatedAt" = NOW() WHERE id = $3 RETURNING *',
          [status, score, id]
        );
  
        if (result.rowCount === 0) {
          return res.status(404).json({ error: 'Assessment not found' });
        }
  
        res.status(200).json(result.rows[0]);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update assessment' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }