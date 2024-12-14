import { Schema, Document } from 'mongoose';

export interface StatCard extends Document {
  title: string;
  value: string | number;
  icon: string;  // Icon name (e.g., 'Zap', 'Users', etc.)
  color: string; // Hex color value
}

export const CardSchema = new Schema<StatCard>({
  title: { type: String, required: true },
  value: { type: Schema.Types.Mixed, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
});
